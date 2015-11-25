package com.app.server.businessservice.healthcontext;
import org.springframework.stereotype.Component;
import com.athena.server.bizService.QueryExecuterService;
import org.springframework.beans.factory.annotation.Autowired;
import com.app.shared.healthcontext.FetchBloodGroup;
import java.lang.Override;
import java.util.List;

@Component
public class FetchBloodGroupBzServiceImpl implements FetchBloodGroupBzService {

    @Autowired
    private QueryExecuterService queryExecuterService;

    @Override
    public List<FetchBloodGroup> executeQueryFetchBloodGroup() throws Exception {
        java.util.List<com.app.shared.healthcontext.FetchBloodGroup> listDtoInterface = new java.util.ArrayList<com.app.shared.healthcontext.FetchBloodGroup>();
        try {
            atg.taglib.json.util.JSONObject queryParams = new atg.taglib.json.util.JSONObject();
            queryParams.put("queryId", "F62BC386-B958-4719-97E9-C952B4C78366");
            atg.taglib.json.util.JSONArray jsonArray = new atg.taglib.json.util.JSONArray();
            queryParams.put("queryCriteria", jsonArray);
            listDtoInterface = queryExecuterService.getAllQueryData("com.app.shared.healthcontext.FetchBloodGroup", queryParams);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return listDtoInterface;
    }
}
