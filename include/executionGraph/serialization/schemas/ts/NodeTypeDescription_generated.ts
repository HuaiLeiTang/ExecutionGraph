// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @constructor
 */
export namespace executionGraph.serialization{
export class NodeTypeDescription {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns NodeTypeDescription
 */
__init(i:number, bb:flatbuffers.ByteBuffer):NodeTypeDescription {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param NodeTypeDescription= obj
 * @returns NodeTypeDescription
 */
static getRootAsNodeTypeDescription(bb:flatbuffers.ByteBuffer, obj?:NodeTypeDescription):NodeTypeDescription {
  return (obj || new NodeTypeDescription).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
type():string|null
type(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
type(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startNodeTypeDescription(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset nameOffset
 */
static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, nameOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset typeOffset
 */
static addType(builder:flatbuffers.Builder, typeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, typeOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endNodeTypeDescription(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  builder.requiredField(offset, 4); // name
  builder.requiredField(offset, 6); // type
  return offset;
};

}
}
