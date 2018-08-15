var YouTube = /** @class */ (function () {
    function YouTube(title, isDownloadable, Author, Category, isCaptionAvailable, qualityOfVideo, shareVia, NumberOfLikes, NumberOfUnLikes, getComment, getSubscriber, getViews) {
        var _this = this;
        //methods of youtube
        this.getRelatedVideos = function () {
            console.log("Related videos of bhuvan bam is xyz");
        };
        this.changeTheQualityOfVideos = function () {
            console.log("Quality of related videos has been changed");
        };
        this.changeTheSpeedOfVideos = function () {
            console.log("Speed of related videos has been changed");
        };
        this.getNumberOfLikes = function () {
            return _this.NumberOfLikes;
        };
        this.getNumberOfUnlikes = function () {
            return _this.NumberOfUnLikes;
        };
        this.getNumberofComments = function () {
            return _this.getComment;
        };
        this.getNumberOfSubscribers = function () {
            return _this.getSubscriber;
        };
        this.getNumberOfViews = function () {
            return _this.getViews;
        };
        this.title = title;
        this.isDownloadable = isDownloadable;
        this.Author = Author;
        this.Category = Category;
        this.isCaptionAvailable = isCaptionAvailable;
        this.qualityOfVideo = qualityOfVideo;
        this.shareVia = shareVia;
        this.NumberOfLikes = NumberOfLikes;
        this.NumberOfUnLikes = NumberOfUnLikes;
        this.getComment = getComment;
        this.getSubscriber = getSubscriber;
        this.getViews = getViews;
    }
    return YouTube;
}());
var youtubeAttribute = new YouTube("bhuvan-bam videos", true, "bhuvan bam", "Comedy", false, "auto", "Whatsapp", 50000, 500, 100, 1000000, 2000000);
console.log("Category of videos is" + " " + youtubeAttribute.Category);
console.log("Number of comments on " + " " + youtubeAttribute.title + " is " + youtubeAttribute.getComment);
var newAuthor = youtubeAttribute.Author = "Pooja verma";
console.log("new author is " + newAuthor);
