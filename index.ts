class YouTube{

    title:String;

    isDownloadable:Boolean;
    Author:String;
    Category:String;
    isCaptionAvailable:Boolean;
    qualityOfVideo:String;
    shareVia:String;
    NumberOfLikes:Number;
    NumberOfUnLikes:Number;
    getComment:Number;
    getSubscriber:Number;
    getViews:Number;


    constructor(title:String,isDownloadable:Boolean,Author:String,Category:String,
        isCaptionAvailable:Boolean,qualityOfVideo:String,shareVia:String,NumberOfLikes:Number,
    NumberOfUnLikes:Number,getComment:Number,getSubscriber:Number,getViews:Number){
        
        this.title = title;
        this.isDownloadable = isDownloadable;
        this.Author = Author;
        this.Category = Category;
        this.isCaptionAvailable = isCaptionAvailable;
        this.qualityOfVideo = qualityOfVideo;
        this.shareVia = shareVia;
        this.NumberOfLikes=NumberOfLikes;
        this.NumberOfUnLikes=NumberOfUnLikes;
        this.getComment=getComment;
        this.getSubscriber=getSubscriber;
        this.getViews=getViews;



    }

     //methods of youtube
    getRelatedVideos=()=>{
        console.log("Related videos of bhuvan bam is xyz");
    }
    changeTheQualityOfVideos=()=>{
        console.log("Quality of related videos has been changed");
    }
    changeTheSpeedOfVideos=()=>{
    console.log("Speed of related videos has been changed");
    }
 
    getNumberOfLikes=()=>{
        return this.NumberOfLikes;
    }
    getNumberOfUnlikes=()=>{
 return this.NumberOfUnLikes;
    }
    getNumberofComments=()=>{
        return this.getComment;
    }
    getNumberOfSubscribers=()=>{
        return this.getSubscriber;
    }
    getNumberOfViews=()=>{
        return this.getViews;
    }



}

let youtubeAttribute = new YouTube("bhuvan-bam videos",true,"bhuvan bam","Comedy",
false,"auto","Whatsapp",50000,500,100,1000000,2000000);

console.log("Category of videos is"+" "+youtubeAttribute.Category);
console.log("Number of comments on "+" "+youtubeAttribute.title+" is "+youtubeAttribute.getComment);
let newAuthor = youtubeAttribute.Author ="Pooja verma";
console.log("New author is "+newAuthor);
