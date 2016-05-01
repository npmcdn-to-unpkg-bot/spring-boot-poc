package app.entity

import org.springframework.data.repository.CrudRepository

trait DemoRepository extends CrudRepository[DemoBean, Long]
