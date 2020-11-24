package com.company;

public class TestCase2 {
    public static void Unittest2() throws Exception{
        String phonenumber = "0974550129";
        String password = "09821agb";
        String uuid ="13df";
        System.out.println("Unit test 2: Phonenumber does not exist");
        ResponseLogin res = ResponseLoginAPI.callAPI(phonenumber, password, uuid);
        if ((!"1003".equals(res.code))) throw new AssertionError();
        System.out.println("Finished");
    }
}
