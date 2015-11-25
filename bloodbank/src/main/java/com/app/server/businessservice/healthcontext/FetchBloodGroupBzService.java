package com.app.server.businessservice.healthcontext;
import com.app.shared.healthcontext.FetchBloodGroup;
import java.util.List;

public interface FetchBloodGroupBzService {

    public List<FetchBloodGroup> executeQueryFetchBloodGroup() throws Exception;
}
