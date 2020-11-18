package com.company;

import com.google.gson.Gson;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class TestCaseLoginAPI {
    public static void callAPI() throws IOException {
        URL ur = new URL(Constant.SIGN_UP);
        HttpURLConnection conn = (HttpURLConnection) ur.openConnection();
        conn.setRequestMethod("GET");
        conn.setDoOutput(true);

    }
}
