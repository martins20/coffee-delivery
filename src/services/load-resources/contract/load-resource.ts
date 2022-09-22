import { Resource } from "../../../dtos";

export interface LoadResourcesContract {
  load: (...resources: Resource) => Promise<void>;
}
