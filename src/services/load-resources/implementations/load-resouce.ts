import { Resource } from "../../../dtos";
import { LoadResourcesContract } from "../contract/load-resource";

export class LoadResourcesImplementation implements LoadResourcesContract {
  async load(resources: Resource): Promise<void> {
    await Promise.all(resources.map((resource) => resource()));
  }
}
