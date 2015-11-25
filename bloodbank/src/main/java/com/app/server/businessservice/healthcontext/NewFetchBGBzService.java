package com.app.server.businessservice.healthcontext;
import com.app.shared.healthcontext.NewFetchBG;
import java.util.List;

public interface NewFetchBGBzService {

    public List<NewFetchBG> executeQueryNewFetchBG() throws Exception;
}
