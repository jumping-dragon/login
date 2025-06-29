import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

export const useDebouncedValue = (inputValue: string, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = React.useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};

export const useQueryParam = <T>(
  paramName: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const router = useRouter();
  const pathname = usePathname();
  const query = router.query[paramName] as string;
  const createQueryString = useCreateQueryString();
  const [input, setInput] = React.useState<T>(defaultValue);

  React.useEffect(() => {
    if (query) {
      try {
        const prevInput = JSON.parse(decodeURIComponent(query)) as T;
        if (JSON.stringify(prevInput) !== JSON.stringify(input)) {
          setInput(prevInput);
        }
      } catch (error) {
        console.error("Error parsing query parameter:", error);
        // Consider setting the input to the default value or handling the error in another way
        setInput(defaultValue);
      }
    }
  }, [query, defaultValue]); // Add defaultValue as a dependency

  const handleChange = React.useCallback(
    (nextInput: React.SetStateAction<T>) => {
      // Resolve the next input value if it's a function
      const nextInputValue =
        nextInput instanceof Function ? nextInput(input) : nextInput;

      console.log(JSON.stringify(nextInputValue));

      // Construct the new query string
      const newQueryString = () => {
        if (
          JSON.stringify(nextInputValue) === "[]" ||
          JSON.stringify(nextInputValue) === "{}" ||
          nextInputValue === undefined ||
          nextInputValue === null // Added null check
        ) {
          return pathname + createQueryString(paramName);
        } else {
          return (
            pathname +
            createQueryString(
              paramName,
              encodeURIComponent(JSON.stringify(nextInputValue))
            )
          );
        }
      };

      router.push(newQueryString()).then(() => {
        setInput(nextInputValue); // Update the state after the router push is complete
      });
    },
    [pathname, createQueryString, paramName, router, input]
  );

  return [input, handleChange];
};

export const useDrawerOpenFromQueryParams = (
  paramName: string,
  otherParams?: string[]
): [boolean, (open: boolean) => void] => {
  const router = useRouter();
  const pathname = usePathname();
  const jobName = router.query[paramName] as string;
  const createQueryString = useCreateQueryString();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (jobName) {
      setIsDrawerOpen(true);
    }
  }, [jobName]);

  const handleOpenChange = async (open: boolean) => {
    if (open) {
    } else {
      const extraArgs = otherParams?.reduce(
        (acc: Record<string, string>, curr: string) => ((acc[curr] = ""), acc),
        {}
      );
      if (extraArgs) {
        await router.push(
          pathname + createQueryString(paramName, undefined, extraArgs)
        );
      } else {
        await router.push(pathname + createQueryString(paramName));
      }
    }
    setIsDrawerOpen(open);
  };
  return [isDrawerOpen, handleOpenChange];
};

export const useCreateQueryString = () => {
  const searchParams = useSearchParams();
  const createQueryString = React.useCallback(
    (name: string, value?: string, extraArgs?: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      if (extraArgs) {
        Object.entries(extraArgs).map(([name, value]) => {
          if (value) {
            params.set(name, value);
          } else {
            params.delete(name);
          }
        });
      }

      return (params.size > 0 ? "?" : "") + params.toString();
    },
    [searchParams]
  );

  return createQueryString;
};

export function useViewport() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const getVH = () =>
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ) || 0;
    setHeight(getVH);
    const handler = () => setHeight(getVH);

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return height;
}
