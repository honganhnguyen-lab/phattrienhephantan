package com.company;

public class TestCase1 {
    public static void Unittest1() throws Exception{
        System.out.println("Test Case 1: Login success");
        String phonenumber = "0974553829";
        String password = "09821agb";
        String uuid = "13df";
        ResponseLogin res = ResponseLoginAPI.callAPI(phonenumber, password, uuid);
        if ((!"1000".equals(res.code))) throw new AssertionError();
        System.out.println("Finished!");
    }
}
