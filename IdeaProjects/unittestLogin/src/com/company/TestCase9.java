package com.company;

public class TestCase9 {
    public static void Unittest9() throws Exception{
        System.out.println("Test Case 9: Missing field uuid");
        String phonenumber = "0974553829";
        String password = "09821agb";
        String uuid = "";
        if("".equals(uuid)){
            System.out.println("Missing uuid");
        }
        ResponseLogin res = ResponseLoginAPI.callAPI(phonenumber, password, uuid);
        if ((!"1002".equals(res.code))) throw new AssertionError();
        System.out.println("Finished!");
    }
}
