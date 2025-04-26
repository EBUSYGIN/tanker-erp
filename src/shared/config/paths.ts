export class Paths {
  static readonly HOME = "/";
  static readonly REGION = (id: string | number) => `/region/${id}`;
  static readonly REGIONS = "/";
  static readonly USERS = "/users";
  static readonly CONSTRUCTIONS = "/constructions";
  static readonly CONSTRUCTION = (id: number) => `/construction/${id}`;
  static readonly SECTOR = (id: number) => `/sector/${id}`;
  static readonly FUEL = (id: number) => `/fuel/${id}`;
}