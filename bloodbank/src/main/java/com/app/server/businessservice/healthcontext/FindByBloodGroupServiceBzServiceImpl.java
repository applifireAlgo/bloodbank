package com.app.server.businessservice.healthcontext;
import org.springframework.stereotype.Component;
import com.athena.server.bizService.QueryExecuterService;
import org.springframework.beans.factory.annotation.Autowired;
import com.app.shared.healthcontext.FindByBloodGroup;
import java.lang.Override;
import java.util.List;

@Component
public class FindByBloodGroupServiceBzServiceImpl implements FindByBloodGroupServiceBzService {

    @Autowired
    private QueryExecuterService queryExecuterService;

    @Override
    public List<FindByBloodGroup> executeQueryFindByBloodGroup() throws Exception {
        java.util.List<com.app.shared.healthcontext.FindByBloodGroup> listDtoInterface = new java.util.ArrayList<com.app.shared.healthcontext.FindByBloodGroup>();
        try {
            atg.taglib.json.util.JSONObject queryParams = new atg.taglib.json.util.JSONObject();
            queryParams.put("queryId", "A729E307-55D3-491D-8484-9DB1BF6EBD00");
            atg.taglib.json.util.JSONArray jsonArray = new atg.taglib.json.util.JSONArray();
            queryParams.put("queryCriteria", jsonArray);
            listDtoInterface = queryExecuterService.getAllQueryData("com.app.shared.healthcontext.FindByBloodGroup", queryParams);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return listDtoInterface;
    }
}
