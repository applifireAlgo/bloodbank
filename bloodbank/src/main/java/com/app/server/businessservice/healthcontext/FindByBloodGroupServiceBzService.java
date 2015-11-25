package com.app.server.businessservice.healthcontext;
import com.app.shared.healthcontext.FindByBloodGroup;
import java.util.List;

public interface FindByBloodGroupServiceBzService {

    public List<FindByBloodGroup> executeQueryFindByBloodGroup() throws Exception;
}
