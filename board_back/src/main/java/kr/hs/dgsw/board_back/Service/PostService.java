package kr.hs.dgsw.board_back.Service;

import kr.hs.dgsw.board_back.Domain.Post;

import java.util.HashMap;
import java.util.List;

public interface PostService {
    List<Post> findAll();
    List findByUserId(Long userId);
    HashMap findById(Long id);
    Long add(Post post);
    int addWithHashmap(Post post);
    int modify(Post post);
    int deleteById(Long id);
}
