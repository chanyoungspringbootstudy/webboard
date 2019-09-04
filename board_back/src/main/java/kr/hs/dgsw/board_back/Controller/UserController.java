package kr.hs.dgsw.board_back.Controller;

import kr.hs.dgsw.board_back.Domain.User;
import kr.hs.dgsw.board_back.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(value = "/api/user/getUsers")
    public List users() {
        return this.userService.findAll();
    }

    @GetMapping(value = "/api/user/getUser/{id}")
    public User findById(@PathVariable Long id){
        return this.userService.findById(id);
    }

    @GetMapping(value = "/api/user/loginUser")
    public User login(@RequestParam String account, @RequestParam String password)
    {
        return this.userService.login(account, password);
    }
    @PostMapping(value = "/api/user/postUser")
    public Long add(@RequestBody User user){
        return this.userService.add(user);
    }

    @PutMapping(value = "/api/user/putUser")
    public int modify(@RequestBody User user){
        return this.userService.modify(user);
    }

    @DeleteMapping(value = "/api/user/deleteUser/{id}")
    public int deleteById(@PathVariable Long id){
        return this.userService.deleteById(id);
    }

}
