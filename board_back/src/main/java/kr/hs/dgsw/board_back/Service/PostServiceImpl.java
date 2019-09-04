package kr.hs.dgsw.board_back.Service;

import kr.hs.dgsw.board_back.Domain.Post;
import kr.hs.dgsw.board_back.Domain.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostMapper postMapper;

    @Override
    public List<Post> findAll() {
        return this.postMapper.findAll();
    }

    @Override
    public int deleteById(Long id) {
        return this.postMapper.deleteById(id);
    }

    @Override
    public Long add(Post post) {
        this.postMapper.add(post); return post.getId();
    }

    @Override
    public int modify(Post post) {
        return this.postMapper.modify(post);
    }

    @Override
    public HashMap findById(Long id) {
        return this.postMapper.findById(id);
    }

    @Override
    public List findByUserId(Long userId) {
        return this.postMapper.findByUserId(userId);
    }

    @Override
    public int addWithHashmap(Post post) {
        HashMap map = new HashMap<String, Object>();
        map.put("userId", post.getUserId());
        map.put("title", post.getTitle());
        map.put("content", post.getContent());
        return this.postMapper.addWithHashmap(map);
    }

}
