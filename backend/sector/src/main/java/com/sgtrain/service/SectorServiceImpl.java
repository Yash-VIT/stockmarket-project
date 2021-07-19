package com.sgtrain.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sgtrain.sector.dao.SectorRepository;
import com.sgtrain.sector.dto.SectorDto;

@Component
public class SectorServiceImpl implements SectorService{
	
	@Autowired
	SectorRepository sectorRepository;
	
	public boolean createSector(SectorDto sectorDto){
		sectorRepository.save(sectorDto);
		return true;
	}
	
	public List<SectorDto> findSector() {
		return sectorRepository.findAll();	
	}
	
	public Optional<SectorDto> findSectorById(int id){
		return sectorRepository.findById(id);
	}

}
