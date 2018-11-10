
export default (sequelize, DataType) => {
    const Peoples = sequelize.define('people', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataType.STRING,
        cpf: DataType.DataType.DECIMAL(11,0),
        rg: DataType.STRING,
        document: DataType.STRING,
        adress: DataType.STRING,
        number: DataType.STRING,
        neighbordhood : DataType.STRING,
        cep: DataType.STRING,
        date_of_birth: DataType.Date
    });

    Peoples.people = id =>{
        return Peoples.findOne({ where: { id }, attributes: ['id', 'name', 'cpf', 'rg', 'document', 'adress', 'adress', 'number', 'neighbordhood', 'cep'  ]})
    }



    return Peoples;

}