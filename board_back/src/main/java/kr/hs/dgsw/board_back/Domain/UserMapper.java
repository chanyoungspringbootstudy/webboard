package kr.hs.dgsw.board_back.Domain;

import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserMapper {

    @Select("select id, account, username, email, created, updated from user")
    List<User> findAll();

    @Delete("delete from user where id=#{id}")
    int deleteById(@Param("id") Long id);

    Long add(User user);
    int modify(User user);
    User findById(@Param("id") Long id);

    User login(@Param("acc") String account, @Param("pwd") String password);
}
