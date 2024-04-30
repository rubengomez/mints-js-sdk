import assignMethods from "../../helpers/mixin.js";

import Assets from "./assets.js";
import ContentBundles from "./contentBundles.js";
import ContentInstances from "./contentInstances.js";
import ContentInstanceVersions from "./contentInstanceVersions.js";
import Forms from "./forms.js";
import Stories from "./stories.js";
import StoryVersions from "./storyVersions.js";

class Content {
}

const allInstances = [
    new Assets,
    new ContentBundles,
    new ContentInstances,
    new ContentInstanceVersions,
    new Forms,
    new Stories,
    new StoryVersions
];

assignMethods(allInstances, Content);

export default Content;