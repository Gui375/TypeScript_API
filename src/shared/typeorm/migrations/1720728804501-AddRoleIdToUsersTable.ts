import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm'

export class AddRoleIdToUsersTable1720728804501 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'roleId',
        type: 'uuid',
        isNullable: true,
      }),
    ),
      await queryRunner.createForeignKey(
        'users',
        new TableForeignKey({
          name: 'UsersRoles', //Nome da ForeignKey
          columnNames: ['roleId'], //Nome da coluna da tabela passada como parametro que irá ser onde ficara a ForeignKey
          referencedTableName: 'roles', // Tabela onde a ForeignKey irá enchergar
          referencedColumnNames: ['id'], // Coluna enchergada pela ForeignKey,
          onDelete: 'SET NULL', //Quando o registro for apagado na tabela onde a ForeignKey ta enchergando, o campo roleId será setado como nullo
        }),
      )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'UsersRoles')
    await queryRunner.dropColumn('users', 'roleId')
  }
}
