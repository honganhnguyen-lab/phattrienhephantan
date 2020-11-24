package com.company;

public class TestCase5 {
    public static void Unittest5() throws Exception{
        String phonenumber = "";
        String password = "";
        String uuid ="13df";
        System.out.println("Unit test 5: Missing field honenumberp and password");
        if("".equals(phonenumber) && "".equals(password)){
            System.out.println("Phonenumber is blank. Enter the phonenumber!");
        } else {
            ResponseLogin res = ResponseLoginAPI.callAPI(phonenumber, password, uuid);
            if ((!"1002".equals(res.code))) throw new AssertionError();
        }
        System.out.println("Finished!");

    }
}
