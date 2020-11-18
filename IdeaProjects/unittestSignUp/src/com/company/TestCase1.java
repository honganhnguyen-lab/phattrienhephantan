package com.company;

public class TestCase1 {
    public static void Unittest1() throws Exception{
        String phonenumber ="0936478732";
        String password = "hjd8620992";
        String uuid ="169";
        System.out.println("Test case 1: ");
        ResponseSignUp res = SignUpAPI.callAPI(phonenumber, password, uuid);
        if (!"1000".equals(res.code)) throw new AssertionError(res.message + " with code " + res.code);

        System.out.println("Finished");


    }
}
