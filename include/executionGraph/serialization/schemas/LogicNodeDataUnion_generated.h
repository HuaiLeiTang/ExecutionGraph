// automatically generated by the FlatBuffers compiler, do not modify


#ifndef FLATBUFFERS_GENERATED_LOGICNODEDATAUNION_EXECUTIONGRAPH_SERIALIZATION_H_
#define FLATBUFFERS_GENERATED_LOGICNODEDATAUNION_EXECUTIONGRAPH_SERIALIZATION_H_

#include "flatbuffers/flatbuffers.h"

namespace executionGraph {
namespace serialization {

struct DummyNodeData;

enum LogicNodeDataUnion {
  LogicNodeDataUnion_NONE = 0,
  LogicNodeDataUnion_DummyNodeData = 1,
  LogicNodeDataUnion_MIN = LogicNodeDataUnion_NONE,
  LogicNodeDataUnion_MAX = LogicNodeDataUnion_DummyNodeData
};

inline LogicNodeDataUnion (&EnumValuesLogicNodeDataUnion())[2] {
  static LogicNodeDataUnion values[] = {
    LogicNodeDataUnion_NONE,
    LogicNodeDataUnion_DummyNodeData
  };
  return values;
}

inline const char **EnumNamesLogicNodeDataUnion() {
  static const char *names[] = {
    "NONE",
    "DummyNodeData",
    nullptr
  };
  return names;
}

inline const char *EnumNameLogicNodeDataUnion(LogicNodeDataUnion e) {
  const size_t index = static_cast<int>(e);
  return EnumNamesLogicNodeDataUnion()[index];
}

template<typename T> struct LogicNodeDataUnionTraits {
  static const LogicNodeDataUnion enum_value = LogicNodeDataUnion_NONE;
};

template<> struct LogicNodeDataUnionTraits<DummyNodeData> {
  static const LogicNodeDataUnion enum_value = LogicNodeDataUnion_DummyNodeData;
};

bool VerifyLogicNodeDataUnion(flatbuffers::Verifier &verifier, const void *obj, LogicNodeDataUnion type);
bool VerifyLogicNodeDataUnionVector(flatbuffers::Verifier &verifier, const flatbuffers::Vector<flatbuffers::Offset<void>> *values, const flatbuffers::Vector<uint8_t> *types);

struct DummyNodeData FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_DUMMY = 4
  };
  int32_t dummy() const {
    return GetField<int32_t>(VT_DUMMY, 3);
  }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<int32_t>(verifier, VT_DUMMY) &&
           verifier.EndTable();
  }
};

struct DummyNodeDataBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_dummy(int32_t dummy) {
    fbb_.AddElement<int32_t>(DummyNodeData::VT_DUMMY, dummy, 3);
  }
  explicit DummyNodeDataBuilder(flatbuffers::FlatBufferBuilder &_fbb)
        : fbb_(_fbb) {
    start_ = fbb_.StartTable();
  }
  DummyNodeDataBuilder &operator=(const DummyNodeDataBuilder &);
  flatbuffers::Offset<DummyNodeData> Finish() {
    const auto end = fbb_.EndTable(start_);
    auto o = flatbuffers::Offset<DummyNodeData>(end);
    return o;
  }
};

inline flatbuffers::Offset<DummyNodeData> CreateDummyNodeData(
    flatbuffers::FlatBufferBuilder &_fbb,
    int32_t dummy = 3) {
  DummyNodeDataBuilder builder_(_fbb);
  builder_.add_dummy(dummy);
  return builder_.Finish();
}

inline bool VerifyLogicNodeDataUnion(flatbuffers::Verifier &verifier, const void *obj, LogicNodeDataUnion type) {
  switch (type) {
    case LogicNodeDataUnion_NONE: {
      return true;
    }
    case LogicNodeDataUnion_DummyNodeData: {
      auto ptr = reinterpret_cast<const DummyNodeData *>(obj);
      return verifier.VerifyTable(ptr);
    }
    default: return false;
  }
}

inline bool VerifyLogicNodeDataUnionVector(flatbuffers::Verifier &verifier, const flatbuffers::Vector<flatbuffers::Offset<void>> *values, const flatbuffers::Vector<uint8_t> *types) {
  if (!values || !types) return !values && !types;
  if (values->size() != types->size()) return false;
  for (flatbuffers::uoffset_t i = 0; i < values->size(); ++i) {
    if (!VerifyLogicNodeDataUnion(
        verifier,  values->Get(i), types->GetEnum<LogicNodeDataUnion>(i))) {
      return false;
    }
  }
  return true;
}

}  // namespace serialization
}  // namespace executionGraph

#endif  // FLATBUFFERS_GENERATED_LOGICNODEDATAUNION_EXECUTIONGRAPH_SERIALIZATION_H_
