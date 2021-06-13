class Pin {
    constructor(pinData){
        this.descriptionHTML = pinData.description_html;
        this.images = pinData.images;
        this.isPlayable = pinData.is_playable;
        this.link = pinData.link;
        this.pinner = pinData.pinner;
        this.title = pinData.title;
        this.likeCount = pinData.like_count;
        this.id = pinData.id;
    }
}

export default Pin;