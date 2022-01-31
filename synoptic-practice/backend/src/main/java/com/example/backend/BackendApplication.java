package com.example.backend;

import com.example.backend.entities.Authority;
import com.example.backend.entities.User;
import com.example.backend.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class BackendApplication {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserDetailsRepository userDetailsRepository;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@PostConstruct
	protected  void init() {
		List<Authority> authorityList = new ArrayList<>();

		authorityList.add(createAuthority("USER","User role"));
		authorityList.add(createAuthority("ADMIN","Admin role"));

		User user = new User();

		user.setUserName("NewAdmin");
		user.setPassword(passwordEncoder.encode("Test12345"));
		System.out.println("PASSWORD: " + passwordEncoder.encode("Test12345"));
		user.setEnabled(true);
		user.setAuthorities(authorityList);

		//userDetailsRepository.save(user); //running again gives error
	}

	private Authority createAuthority(String roleCode, String roleDescription) {
		Authority authority=new Authority();
		authority.setRoleCode(roleCode);
		authority.setRoleDescription(roleDescription);
		return authority;
	}

}
