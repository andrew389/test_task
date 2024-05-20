import uuid

from pydantic import BaseModel
from sqlalchemy import Column, String, Text
from sqlalchemy.ext.mutable import MutableList
from sqlalchemy_utils import UUIDType, JSONType

class Post(BaseModel):
    __tablename__ = 'posts'

    id = Column(UUIDType(binary=False), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
    title = Column(String, nullable=False)
    summary = Column(Text, nullable=False)
    tags = Column(MutableList.as_mutable(JSONType), nullable=False)
    content = Column(Text, nullable=False)
