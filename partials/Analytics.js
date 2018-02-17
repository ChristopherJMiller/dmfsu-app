import { Analytics, PageHit } from 'expo-analytics';

export default analytics = (pageName) => {
    const analytics = new Analytics('UA-100079799-2');
    analytics.hit(new PageHit(pageName));
}