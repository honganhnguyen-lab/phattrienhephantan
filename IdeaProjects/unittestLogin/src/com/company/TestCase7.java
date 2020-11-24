package com.company;

public class TestCase7 {
    public static void Unittest7() throws Exception{
        System.out.println("Test Case 7: Invalid password");
        String phonenumber = "0974553829";
        String password = "0974553829";
        String uuid = "13df";
        if(password.equals(phonenumber)){
            System.out.println("Password is invalid: the same as the phonenumber. Please check password!");
        } else {
            ResponseLogin res = ResponseLoginAPI.callAPI(phonenumber, password, uuid);
            if ((!"1003".equals(res.code))) throw new AssertionError();
        }
        System.out.println("Finished!");
    }
}
