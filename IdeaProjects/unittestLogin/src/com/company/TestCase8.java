package com.company;

public class TestCase8 {
    public static void Unittest8() throws Exception{
        System.out.println("Test Case 8: Login in 2 computers");
        String phonenumber = "0974553829";
        String password = "09821agb";
        String uuid = "13df";
        ResponseLogin res = ResponseLoginAPI.callAPI(phonenumber, password, uuid);
        if ((!"1000".equals(res.code))) throw new AssertionError();
        ResponseLogin res2 = ResponseLoginAPI.callAPI(phonenumber, password, uuid);
        if ((!"1000".equals(res2.code))) throw new AssertionError();
        System.out.println("Finished!");
    }
}
