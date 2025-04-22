package com.belavadi.FamilyTime.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfigure {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception  {
        // TODO Auto-generated method stub
        http.csrf(csrf -> csrf.disable()).
        authorizeHttpRequests(auth->auth
        .requestMatchers("/api/auth/**").permitAll().
        anyRequest().authenticated()).httpBasic(withDefaults());;
        return http.build();
    }
}