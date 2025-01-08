package com.xworkz.xworkz_common_module_Arun.configuration;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import javax.sql.DataSource;

import static com.sun.activation.registries.LogSupport.log;

@Configuration
@ComponentScan("com.xworkz.xworkz_common_module_Arun")
@EnableWebMvc
@Slf4j
@EnableScheduling
public class ConfigurationClass {

    private int size = 5 * 1024 * 1024;

    public ConfigurationClass(){
        log.info("This is Configuration");
    }

    @Bean
    public ViewResolver viewResolver(){
        return new InternalResourceViewResolver("/", ".jsp");
    }

    @Bean
    public DataSource dataSource(){
        DriverManagerDataSource source =new DriverManagerDataSource();
        source.setDriverClassName("com.mysql.cj.jdbc.Driver");
        source.setUrl("jdbc:mysql://localhost:3306/newdb");
        source.setUsername("root");
        source.setPassword("7483079907");
        return source;
    }


    @Bean
    public LocalContainerEntityManagerFactoryBean localContainerEntityManagerFactoryBean(){
        LocalContainerEntityManagerFactoryBean bean = new LocalContainerEntityManagerFactoryBean();
        bean.setPackagesToScan("com.xworkz.xworkz_common_module_Arun.entity");
        bean.setDataSource(dataSource());
        bean.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
        return bean;
    }


    @Bean(name = "multipartResolver")
    public CommonsMultipartResolver multipartResolver(){
        CommonsMultipartResolver commonsMultipartResolver = new CommonsMultipartResolver();
        commonsMultipartResolver.setMaxUploadSize(size);
        commonsMultipartResolver.setMaxInMemorySize(size);
        return commonsMultipartResolver;
    }



}
