package com.app.server.businessservice.healthcontext.healthcare;
import com.app.server.businessservice.healthcontext.StockUpdateBzService;
import com.app.server.repository.BloodStockRepository;
import com.app.shared.healthcare.BloodStock;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.ruleengine.server.bzservice.RuleEngineInterface;
import com.spartan.shield.sessionService.SessionDataMgtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.app.shared.healthcare.BloodRequest;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;

@Component
public class AddBloodToStock {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private BloodStockRepository<BloodStock> bloodStockRepository;

    @Autowired
    private RuleEngineInterface ruleEngineInterface;

    @Autowired
    private StockUpdateBzService stockUpdateBzService;

    public void proAddBloodToStock(BloodRequest bloodreq) throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        try {
            java.util.List<com.app.shared.healthcontext.StockUpdate> stockupdate_1 = stockUpdateBzService.executeQueryStockUpdate();
            for (com.app.shared.healthcontext.StockUpdate _stockupdate_1 : stockupdate_1) {
                ruleEngineInterface.initialize("4319dc54-ec58-4281-b680-de2868cf2f4f");
                ruleEngineInterface.add(_stockupdate_1);
                ruleEngineInterface.add(runtimeLogInfoHelper);
                ruleEngineInterface.add(bloodreq);
                ruleEngineInterface.executeRule();
                if ((com.app.shared.healthcare.BloodStock) ruleEngineInterface.getResult("bloodstock_2") == null) {
                    throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
                }
                com.app.shared.healthcare.BloodStock bloodstock_3 = bloodStockRepository.save((com.app.shared.healthcare.BloodStock) ruleEngineInterface.getResult("bloodstock_2"));
            }
        } catch (com.athena.framework.server.exception.biz.RuleInitException | com.athena.framework.server.exception.biz.RuleExecuteException | com.athena.framework.server.exception.biz.RuleWorkingMemoryException | com.athena.framework.server.exception.biz.RuleDataException e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException("3005");
        } catch (Exception e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException(e.getCause().getMessage());
        }
    }
}
