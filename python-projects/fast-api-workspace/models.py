from sqlalchemy import Column, Integer, String, Date, Numeric, CHAR
from database import Base


class Employee(Base):
    __tablename__ = "employee"
    __table_args__ = {"schema": "public"}

    empcode = Column(Integer, primary_key=True)
    empfname = Column(String(15))
    emplname = Column(String(15))
    job = Column(String(45))
    manager = Column(CHAR(4))
    hiredate = Column(Date)
    salary = Column(Numeric(6, 2))
    commission = Column(Integer)
    deptcode = Column(Integer)
