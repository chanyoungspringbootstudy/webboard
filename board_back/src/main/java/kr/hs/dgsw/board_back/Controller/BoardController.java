package kr.hs.dgsw.board_back.Controller;

import kr.hs.dgsw.board_back.Domain.User;
import kr.hs.dgsw.board_back.Service.PostService;
import kr.hs.dgsw.board_back.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BoardController {
    @Autowired
    UserService userService;

    @Autowired
    PostService postService;

    @GetMapping("/api/user/list")
    public List list() {
        return this.userService.findAll();
    }

    @GetMapping("/api/user/find/{id}")
    public User find(@PathVariable Long id){
        return this.userService.findById(id);
    }

    @GetMapping("/api/user/delete/{id}")
    public int delete(@PathVariable Long id){
        return this.userService.deleteById(id);
    }

    @GetMapping("/api/user/add")
    public Long add(@RequestBody User user){
        return this.userService.add(user);
    }

    @PostMapping ("/api/user/modify")
    public int modify(@RequestBody User user){
        return this.userService.modify(user);
    }
}
