export interface ProjectData {
    title: string;
    desc: string;
    link: string
    git: string
}

export const CommunProj: ProjectData = {
    title: "Tweet Commune",
    desc: "A Django app that posts a user submitted tweet to Twitter every 30 minutes. The project has an activity community" +
        " of 180 followers and nearly one thousand submissions in less than a month. Users are able to submit text content" +
        " as well as an image to be posted.",
    link: "https://jackfromohio.com/commune/",
    git: "https://github.com/JackPhallen/TweetCommune"
};

export const TaggerProj: ProjectData = {
    title: "Script Tagger",
    desc: "A Java Swing app I wrote for WCBE 90.5 to assist employees in tagging talk show episodes on the organization's website" +
        " The app reads a provided script, generates a list of keywords for the user to select, then adds the words as tags to " +
        "the selected episode. The app has been used to tag over 190 episodes.",
    link: "https://github.com/JackPhallen/TaggerWCBE",
    git: "https://github.com/JackPhallen/TaggerWCBE"
};

export const WaterMeProj: ProjectData = {
    title: "WaterMe (OLD)",
    desc: "A simple React.js Native mobile app that tracks when your plants need watered. Users can add plants, select how frequently" +
        "they need watered, and mark when they've been watered.",
    link: "https://github.com/JackPhallen/WaterMe",
    git: "https://github.com/JackPhallen/WaterMe"
};

export const WikiBotProj: ProjectData = {
    title: "Wikipedia Shuffler (OLD)",
    desc: "A Python application that scrapes Wikipedia and posts content to Twitter every 90 minutes. The bot cycles between current events, " +
        "featured articles and random articles. ",
    link: "https://twitter.com/shufflewiki",
    git: "https://github.com/JackPhallen/WikiTwitterBot"
};


export const TwitterBotProj: ProjectData = {
    title: "NoAPI Twitter Bot (OLD)",
    desc: "An easily extendable Python Twitter Bot that does not require a Twitter API key to function. User can write a module that" +
        "provides the bot content to tweet. My Wikipedia Shuffler runs on top of this." +
        "runs using this ",
    link: "https://github.com/JackPhallen/TwitterBot",
    git: "https://github.com/JackPhallen/TwitterBot"
};



export const PROJECT_LIST: ProjectData[] = [CommunProj, TaggerProj, WaterMeProj, WikiBotProj, TwitterBotProj];