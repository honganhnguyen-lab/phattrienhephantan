package com.company;

public class TestCase3 {
    public static void Unittest3() throws Exception{
        String phonenumber = "9745501291";
        String password = "09821agb";
        String uuid ="13df";
        char comp = phonenumber.charAt(0);
        System.out.println("Unit test 3: Invalid Phonenumber");
        if(!("0".equals(comp)) || !(phonenumber.length()==9)){
            System.out.println("Phonenumber is invalid: not satisfied length or not begin with 0");
        } else {
            ResponseLogin res = ResponseLoginAPI.callAPI(phonenumber, password, uuid);
            if ((!"1003".equals(res.code))) throw new AssertionError();
        }
        System.out.println("Finished!");

    }
}
