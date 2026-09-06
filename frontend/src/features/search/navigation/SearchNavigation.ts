export default class SearchNavigation {
  results(query: string) {
    return `/search?q=${encodeURIComponent(query)}`;
  }
}
