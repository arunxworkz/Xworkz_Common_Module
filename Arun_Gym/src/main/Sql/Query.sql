use gymdb;
creat table admindetails(
id int auto_incement primary key,
name varchar(45),
email varchar(45),
password varchar(5000)
);
select * from admindetails;


//To update the data appeared in the front end
@NamedQuery(name = "getRegisterEntityById", query = "Select re from RegisterEntity re where re.id=:setId")

@NamedQuery(name = "updateDetails", query = "update RegisterEntity re set re.packages=: setPackage, re.trainer=: setTrainer, re.installement=: setInstallement, re.totalammount=: setTotalammount, re.balanceAmmount=: setBalanceammount, re.installmentAmount=: setInstallmentAmount where re.id=: setId")

//To get all data to front end
@NamedQuery(name = "getALL", query = "select re from RegisterEntity re")

@NamedQuery(name = "getDataByName", query = "select re from RegisterEntity re where re.name=: setName")

@NamedQuery(name = "getDataByEmail", query = "select ud from RegisterEntity ud where ud.email=: setEmail")

@NamedQuery(name = "updatePassword", query = "update RegisterEntity ud set ud.password=: setPassword where ud.email=: setEmail")

@NamedQuery(name = "forScheduler", query = "update RegisterEntity rd set rd.signincount = 0 where rd.accountlocktime < : currentTime")
