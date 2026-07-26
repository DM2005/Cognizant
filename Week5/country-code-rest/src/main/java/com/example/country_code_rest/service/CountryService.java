package com.example.country_code_rest.service;

import com.example.country_code_rest.Country;
import com.example.country_code_rest.CountryList;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    public Country getCountry(String code) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        CountryList list =
                context.getBean("countryList", CountryList.class);

        for (Country country : list.getCountryList()) {

            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }
        }

        return null;
    }
}