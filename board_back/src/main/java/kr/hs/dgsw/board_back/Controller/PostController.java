package kr.hs.dgsw.board_back.Controller;

import kr.hs.dgsw.board_back.Domain.Post;
import kr.hs.dgsw.board_back.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class PostController {

    @Autowired
    PostService postService;

    @GetMapping(value = "/api/post/getPosts")
    public List board() {
        return this.postService.findAll();
    }

    @GetMapping(value = "/api/post/getPostUserId/{userId}")
    public List findByUserId(@PathVariable Long userId){
        return this.postService.findByUserId(userId);
    }

    @GetMapping(value = "/api/post/getPost/{id}")
    public HashMap findById(@PathVariable Long id){
        return this.postService.findById(id);
    }

    @PostMapping(value = "/api/post/addPost")
    public Long add(@RequestBody Post post){
        return this.postService.add(post);
    }

    @PostMapping(value = "/api/post/postBoardHash")
    public int addWithHashmap(@RequestBody Post post){
        return this.postService.addWithHashmap(post);
    }

    @PutMapping(value = "/api/post/modify")
    public int modify(@RequestBody Post post){
        return this.postService.modify(post);
    }

    @DeleteMapping(value = "/api/post/deletePost/{id}")
    public int deleteById(@PathVariable Long id){
        return this.postService.deleteById(id);
    }

}
