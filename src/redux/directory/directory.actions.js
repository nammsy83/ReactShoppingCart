import { SECTIONITEMS } from './directory.type';

const directorySectionItems = section => ({
    type: SECTIONITEMS,
    payload: section
});

export default directorySectionItems;