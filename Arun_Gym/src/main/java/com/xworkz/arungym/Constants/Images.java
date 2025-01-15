package com.xworkz.arungym.Constants;

public enum Images {
    ADMIN_BACKGROUND("/resources/images/adminbackgroud.jpg");

    private String imagePath;

    Images(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getImagePath(){
        return imagePath;
    }
}
