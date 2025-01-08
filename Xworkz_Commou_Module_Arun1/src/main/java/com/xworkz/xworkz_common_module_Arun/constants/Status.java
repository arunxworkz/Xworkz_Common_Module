package com.xworkz.xworkz_common_module_Arun.constants;

public enum Status {

    SUCCESS(1),FAILURE(2);

    private int code;

    private Status(int code)
    {
        this.code=code;
    }

    public int getCode() {
        return code;
    }
}
