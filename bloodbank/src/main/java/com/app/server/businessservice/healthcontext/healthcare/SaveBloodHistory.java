package com.app.server.businessservice.healthcontext.healthcare;
import com.app.server.repository.BloodHistoryRepository;
import com.app.server.repository.BloodInfoRepository;
import com.app.shared.healthcare.BloodHistory;
import com.app.shared.healthcare.BloodInfo;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.ruleengine.server.bzservice.RuleEngineInterface;
import com.spartan.shield.sessionService.SessionDataMgtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;

@Component
public class SaveBloodHistory {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private RuleEngineInterface ruleEngineInterface;

    @Autowired
    private BloodInfoRepository<BloodInfo> bloodInfoRepository;

    @Autowired
    private BloodHistoryRepository<BloodHistory> bloodHistoryRepository;

    public void proSaveBloodHistory(BloodInfo entity) throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        try {
            if (entity == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            com.app.shared.healthcare.BloodInfo bloodinfo_28 = bloodInfoRepository.save(entity);
            ruleEngineInterface.initialize("8662de14-016c-449e-8d36-9e854061108f");
            ruleEngineInterface.add(bloodinfo_28);
            ruleEngineInterface.add(runtimeLogInfoHelper);
            ruleEngineInterface.add(entity);
            ruleEngineInterface.executeRule();
            if ((com.app.shared.healthcare.BloodHistory) ruleEngineInterface.getResult("bloodhistory_1") == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            com.app.shared.healthcare.BloodHistory bloodhistory_2 = bloodHistoryRepository.save((com.app.shared.healthcare.BloodHistory) ruleEngineInterface.getResult("bloodhistory_1"));
        } catch (com.athena.framework.server.exception.biz.RuleInitException | com.athena.framework.server.exception.biz.RuleExecuteException | com.athena.framework.server.exception.biz.RuleWorkingMemoryException | com.athena.framework.server.exception.biz.RuleDataException e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException("3005");
        } catch (Exception e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException(e.getCause().getMessage());
        }
    }
}
