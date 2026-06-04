/** True while the first (or in-flight) API request has not completed successfully. */
export function isSectionLoading(state: {
  isLoading: boolean;
  isFetching: boolean;
  isSuccess: boolean;
}): boolean {
  return state.isLoading || (state.isFetching && !state.isSuccess);
}

/**
 * Prefer live API data when the request succeeded; use static fallback only on error.
 * While loading, callers should render {@link SectionLoader} — not `value`.
 */
export function useApiOrFallback<TData, TResult>(
  state: {
    data?: TData;
    isSuccess: boolean;
    isError: boolean;
    isLoading: boolean;
    isFetching: boolean;
  },
  select: (data: TData) => TResult | undefined | null,
  fallback: TResult
): { value: TResult; fromApi: boolean; isLoading: boolean } {
  const loading = isSectionLoading(state);

  if (state.isSuccess && state.data) {
    const picked = select(state.data);
    if (
      picked !== undefined &&
      picked !== null &&
      !(Array.isArray(picked) && picked.length === 0)
    ) {
      return { value: picked, fromApi: true, isLoading: false };
    }
  }

  if (loading) {
    return { value: fallback, fromApi: false, isLoading: true };
  }

  if (state.isError) {
    return { value: fallback, fromApi: false, isLoading: false };
  }

  return { value: fallback, fromApi: false, isLoading: false };
}
