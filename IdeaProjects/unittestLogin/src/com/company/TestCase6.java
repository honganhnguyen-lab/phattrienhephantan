package com.company;

public class TestCase6 {
    public static void Unittest6() throws Exception{
        System.out.println("Test Case 6: No Internet Access");
        String phonenumber = "0974553829";
        String password = "09821agb";
        String uuid = "13df";
        ResponseLogin res = ResponseLoginAPI.callAPI(phonenumber, password, uuid);
        if ((!"1001".equals(res.code))) throw new AssertionError();
        System.out.println("Finished!");
    }
}
