package com.company;

public class TestCase2 {
    public static void Unittest2() throws Exception{
        String phonenumber ="0936478732";
        String password = "hjd8620292";
        String uuid ="201";
        System.out.println("Test case 2: ");
        ResponseSignUp res = SignUpAPI.callAPI(phonenumber, password, uuid);
        if (!"9996".equals(res.code)) throw new AssertionError(res.message + " with code " + res.code);
        System.out.println("Finished");
    }

}
